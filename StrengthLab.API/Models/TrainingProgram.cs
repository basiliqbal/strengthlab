namespace StrengthLab.API.Models
{
    public class TrainingProgram
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public int BenchMax { get; set; }

        public int WeeklyIncrement { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}