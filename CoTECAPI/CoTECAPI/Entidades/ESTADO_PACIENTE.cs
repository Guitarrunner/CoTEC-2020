using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class ESTADO_PACIENTE
    {
        [Key]
        public int IdPaciente { get; set; }

        public int IdEstado { get; set; }

    }
}
