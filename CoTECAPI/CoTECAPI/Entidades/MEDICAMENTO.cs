using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class MEDICAMENTO
    {
        [Key]
        public int IdMedicamento { get; set; }

        public string  Medicamento { get; set; }

        public string CasaFarmaceutica { get; set; }

    }
}
