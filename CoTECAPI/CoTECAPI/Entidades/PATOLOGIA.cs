using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class PATOLOGIA
    {
        [Key]
        public int IdPatologia { get; set; }

        public string NombrePatologia { get; set; }

        public string Descripcion { get; set; }

        public string Sintomas { get; set; }

        public string Tratamiento { get; set; }

    }
}
