using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class ESTADO
    {
        [Key]
        public int IdEstado { get; set; }

        public string Estado { get; set; }

    }
}
