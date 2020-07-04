using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Entidades
{
    public class CENTRO_HOSPITALARIO
    {
        [Key]
        public int IdCentrohospitalario { get; set; }

        public string NombreHospital { get; set; }

        public string Director { get; set; }

        public string Contacto { get; set; }

        public int IdLugar { get; set; }

        public int Capacidad { get; set; }

    }
}
