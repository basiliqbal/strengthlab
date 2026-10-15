
"use client";

import { useEffect, useState } from "react";
import WorkoutSchedule from "./WorkoutSchedule";

export default function SavedPrograms() {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const [editingId, setEditingId] = useState(null);
    const [editBenchMax, setEditBenchMax] = useState("");
    const [editIncrement, setEditIncrement] = useState(5);
    const [updating, setUpdating] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        async function fetchPrograms() {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/programs`
                );

                if (!response.ok) {
                    throw new Error("Failed to retrieve programs.");
                }

                const data = await response.json();
                setPrograms(data);
            } catch (err) {
                console.error(err);
                setError(
                    "Could not load programs. Make sure the backend is running."
                );
            } finally {
                setLoading(false);
            }
        }

        fetchPrograms();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this program?"
        );

        if (!confirmed) return;

        setDeletingId(id);
        setError("");

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/programs/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete program.");
            }

            setPrograms((currentPrograms) =>
                currentPrograms.filter((program) => program.id !== id)
            );

            if (selectedId === id) {
                setSelectedId(null);
            }

            if (editingId === id) {
                setEditingId(null);
            }
        } catch (err) {
            console.error(err);
            setError("Could not delete the program.");
        } finally {
            setDeletingId(null);
        }
    };

    const handleEdit = (program) => {
        setEditingId(program.id);
        setEditBenchMax(String(program.benchMax));
        setEditIncrement(program.weeklyIncrement);
        setError("");
    };

    const handleUpdate = async (program) => {
        const benchMax = Number(editBenchMax);
        const increment = Number(editIncrement);

        if (
            editBenchMax === "" ||
            !Number.isInteger(benchMax) ||
            benchMax < 45 ||
            benchMax > 1500
        ) {
            alert("Enter a valid bench max between 45 and 1500 lbs.");
            return;
        }

        if (![5, 10].includes(increment)) {
            alert("Weekly increment must be 5 or 10 lbs.");
            return;
        }

        setUpdating(true);
        setError("");

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/programs/${program.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...program,
                        benchMax,
                        weeklyIncrement: increment,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update program.");
            }

            setPrograms((currentPrograms) =>
                currentPrograms.map((item) =>
                    item.id === program.id
                        ? {
                            ...item,
                            benchMax,
                            weeklyIncrement: increment,
                        }
                        : item
                )
            );

            setEditingId(null);
        } catch (err) {
            console.error(err);
            setError("Could not update the program.");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <p className="text-gray-400">
                Loading saved programs...
            </p>
        );
    }

    return (
        <div className="space-y-5">
            {error && (
                <p className="rounded-lg border border-red-800 bg-red-950/30 p-4 text-red-400">
                    {error}
                </p>
            )}

            {programs.length === 0 ? (
                <p className="text-gray-400">
                    No saved programs yet. Generate and save one from the calculator.
                </p>
            ) : (
                programs.map((program) => (
                    <div
                        key={program.id}
                        className="rounded-xl border border-[#34363A] bg-[#1C1E21] p-6"
                    >
                        {/* Program information and action buttons */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    {program.name}
                                </h2>

                                <p className="mt-2 text-sm text-gray-400">
                                    Bench Max: {program.benchMax} lbs
                                    {" | "}
                                    Weekly Increase: {program.weeklyIncrement} lbs
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedId(
                                            selectedId === program.id ? null : program.id
                                        )
                                    }
                                    className="rounded-lg bg-[#D62828] px-5 py-3 font-bold text-white transition hover:bg-red-700"
                                >
                                    {selectedId === program.id
                                        ? "Hide Schedule"
                                        : "View Schedule"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        editingId === program.id
                                            ? setEditingId(null)
                                            : handleEdit(program)
                                    }
                                    className="rounded-lg border border-gray-500 px-5 py-3 font-bold text-white transition hover:bg-gray-700"
                                >
                                    {editingId === program.id ? "Cancel Edit" : "Edit"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(program.id)}
                                    disabled={deletingId === program.id}
                                    className="rounded-lg border border-[#D62828] px-5 py-3 font-bold text-[#D62828] transition hover:bg-[#D62828] hover:text-white disabled:opacity-50"
                                >
                                    {deletingId === program.id ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </div>

                        {/* Edit form */}
                        {editingId === program.id && (
                            <div className="mt-6 space-y-4 border-t border-[#34363A] pt-6">
                                <h3 className="text-lg font-bold text-white">
                                    Edit Program
                                </h3>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor={`bench-${program.id}`}
                                            className="mb-2 block text-sm text-gray-400"
                                        >
                                            Bench Max (lbs)
                                        </label>

                                        <input
                                            id={`bench-${program.id}`}
                                            type="number"
                                            min="45"
                                            max="1500"
                                            value={editBenchMax}
                                            onChange={(e) =>
                                                setEditBenchMax(e.target.value)
                                            }
                                            className="w-full rounded-lg border border-[#34363A] bg-[#101113] p-3 text-white outline-none focus:border-[#D62828]"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor={`increment-${program.id}`}
                                            className="mb-2 block text-sm text-gray-400"
                                        >
                                            Weekly Increment
                                        </label>

                                        <select
                                            id={`increment-${program.id}`}
                                            value={editIncrement}
                                            onChange={(e) =>
                                                setEditIncrement(Number(e.target.value))
                                            }
                                            className="w-full rounded-lg border border-[#34363A] bg-[#101113] p-3 text-white outline-none focus:border-[#D62828]"
                                        >
                                            <option value={5}>5 lbs</option>
                                            <option value={10}>10 lbs</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <button
                                        type="button"
                                        onClick={() => handleUpdate(program)}
                                        disabled={updating}
                                        className="rounded-lg bg-[#D62828] px-5 py-3 font-bold text-white transition hover:bg-red-700 disabled:opacity-50"
                                    >
                                        {updating ? "Saving..." : "Save Changes"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setEditingId(null)}
                                        className="rounded-lg border border-gray-500 px-5 py-3 text-white transition hover:bg-gray-700"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Saved workout schedule */}
                        {selectedId === program.id && (
                            <div className="mt-6 border-t border-[#34363A] pt-6">
                                <WorkoutSchedule
                                    generatedMax={program.benchMax}
                                    generatedIncrement={program.weeklyIncrement}
                                />
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
