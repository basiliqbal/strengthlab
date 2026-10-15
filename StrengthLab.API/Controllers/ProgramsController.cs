using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StrengthLab.API.Data;
using StrengthLab.API.Models;

namespace StrengthLab.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProgramsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProgramsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<TrainingProgram>>> GetPrograms()
        {
            var programs = await _context.TrainingPrograms.ToListAsync();

            return Ok(programs);
        }


        [HttpPost]
        public async Task<ActionResult<TrainingProgram>> CreateProgram(TrainingProgram program)                                   
        {
            _context.TrainingPrograms.Add(program);

            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetPrograms),
                new { id = program.Id },
                program
            );
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingProgram>> GetProgramById(int id)
        {
            var program = await _context.TrainingPrograms.FindAsync(id);

            if (program == null)
            {
                return NotFound();
            }

            return Ok(program);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProgram(
    int id,
    TrainingProgram updatedProgram)
        {
            var program = await _context.TrainingPrograms.FindAsync(id);

            if (program == null)
            {
                return NotFound();
            }

            program.Name = updatedProgram.Name;
            program.BenchMax = updatedProgram.BenchMax;
            program.WeeklyIncrement = updatedProgram.WeeklyIncrement;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgram(int id)
        {
            var program = await _context.TrainingPrograms.FindAsync(id);

            if (program == null)
            {
                return NotFound();
            }

            _context.TrainingPrograms.Remove(program);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
