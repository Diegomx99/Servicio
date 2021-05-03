using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ApiServicio.Models
{
    public partial class gestorContext : DbContext
    {
        public gestorContext()
        {
        }

        public gestorContext(DbContextOptions<gestorContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Aula> Aula { get; set; }
        public virtual DbSet<Horario> Horario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=;database=gestor");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aula>(entity =>
            {
                entity.ToTable("aula");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Ubicacion)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Horario>(entity =>
            {
                entity.ToTable("horario");

                entity.HasIndex(e => e.IdAula)
                    .HasName("idAula");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Dia)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Fecha).HasColumnType("date");

                entity.Property(e => e.Hora).HasDefaultValueSql("'NULL'");

                entity.Property(e => e.IdAula)
                    .HasColumnName("idAula")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Profesor)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.IdAulaNavigation)
                    .WithMany(p => p.Horario)
                    .HasForeignKey(d => d.IdAula)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("horario_ibfk_1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
