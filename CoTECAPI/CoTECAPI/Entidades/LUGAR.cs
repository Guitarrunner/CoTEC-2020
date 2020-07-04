using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class LUGAR
    {
        [Key]
        public int IdLugar { get; set; }

        public string Pais { get; set; }

        public string Estado { get; set; }

        public string Region { get; set; }

        public int Provincia { get; set; }

    }
}
