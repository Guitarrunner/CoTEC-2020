using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class CONTACTO
    {
        [Key]
        public int IdContacto { get; set; }

        public string NombreContacto { get; set; }

        public string Apellidos { get; set; }

        public int IdPaciente { get; set; }

        public string NumIdentificacionContacto { get; set; }

        public int Edad { get; set; }

        public string Nacionalidad { get; set; }

        public string Email { get; set; }

        public int IdPatologia { get; set; }
    }
}
