using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class MEDIDA_SANITARIA
    {
        [Key]
        public int IdMedidaSanitaria { get; set; }

        public string NombreMedida { get; set; }

        public string Descripcion { get; set; }

    }
}
