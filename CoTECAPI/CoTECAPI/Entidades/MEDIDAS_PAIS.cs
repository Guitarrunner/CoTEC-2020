using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class MEDIDAS_PAIS
    {
        [Key]
        public int IdMedidasPais { get; set; }

        public int IdLugar { get; set; }

        public int IdMedidaSanitaria { get; set; }

        public string Estado { get; set; }

    }
}
