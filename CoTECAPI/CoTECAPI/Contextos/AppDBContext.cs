using CoTECAPI.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Contextos
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {

        }


        public DbSet<CENTRO_HOSPITALARIO> CENTRO_HOSPITALARIO { get; set; }
        public DbSet<CONTACTO> CONTACTO { get;  set; }
        public DbSet<ESTADO> ESTADO { get;  set; }
        public DbSet<ESTADO_PACIENTE> ESTADO_PACIENTE { get;  set; }
        public DbSet<LUGAR> LUGAR { get;  set; }
        public DbSet<MEDICAMENTO> MEDICAMENTO { get;  set; }
        public DbSet<MEDIDA_SANITARIA> MEDIDA_SANITARIA { get;  set; }
        public DbSet<MEDIDAS_PAIS> MEDIDAS_PAIS { get;  set; }
        public DbSet<PACIENTE> PACIENTE { get;  set; }
        public DbSet<PATOLOGIA> PATOLOGIA { get;  set; }
    }
}
