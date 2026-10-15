using Microsoft.EntityFrameworkCore;
using StrengthLab.API.Models;

namespace StrengthLab.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<TrainingProgram> TrainingPrograms { get; set; }
    }
}