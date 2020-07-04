using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class PACIENTE
    {
        [Key]
        public int IdPaciente { get; set; }

        public string NombrePaciente { get; set; }

        public string Apellidos { get; set; }

        public int Edad { get; set; }

        public int IdLugar { get; set; }

        public string Nacionalidad { get; set; }

        public int IdEstado { get; set; }

        public string IdContactos { get; set; }

        public string Email { get; set; }

        public string Internado { get; set; }

        public int IdPatologia { get; set; }

        public int IdMedicamento { get; set; }

        public string NumIdentificacion { get; set; }
    }
}
