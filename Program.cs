using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace CoTEC
{
    class Program
    {
        static void Main(string[] args)
        {
            using (CoTECEntities db = new CoTECEntities())
            {
                var lst = db.LUGAR;
                var aa = db.LUGAR.Where(d => d.Pais == "Costa Rica").First();
                foreach(var xx in lst)
                {
                    Console.WriteLine(xx.IdLugar);
                }
                Console.Read();
            }

        }

        void Modify(List<string> toModify)
        {
            if (Int16.Parse(toModify.ElementAt(0)) == 1)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    LUGAR tmp = db.LUGAR.Where(d => d.Provincia == toModify.ElementAt(4)).First();
                    tmp.Pais = toModify.ElementAt(1);
                    tmp.Estado = toModify.ElementAt(2);
                    tmp.Region = toModify.ElementAt(3);
                    tmp.Provincia = toModify.ElementAt(4);
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toModify.ElementAt(0)) == 2)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    CENTRO_HOSPITALARIO tmp = db.CENTRO_HOSPITALARIO.Where(d => d.NombreHospital == toModify.ElementAt(1)).First();
                    tmp.NombreHospital = toModify.ElementAt(1);
                    tmp.Director = toModify.ElementAt(2);
                    tmp.Contacto = toModify.ElementAt(3);
                    tmp.IdLugar = Int16.Parse(toModify.ElementAt(4));
                    tmp.Capacidad = Int16.Parse(toModify.ElementAt(5));
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toModify.ElementAt(0)) == 3)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    CONTACTO tmp = db.CONTACTO.Where(d => d.NumIdentificacionContacto == toModify.ElementAt(4)).First();
                    tmp.NombreContacto = toModify.ElementAt(1);
                    tmp.IdPaciente = Int16.Parse(toModify.ElementAt(2));
                    tmp.Apellidos = toModify.ElementAt(3);
                    tmp.NumIdentificacionContacto = toModify.ElementAt(4);
                    tmp.Edad = Int16.Parse(toModify.ElementAt(5));
                    tmp.IdLugar = Int16.Parse(toModify.ElementAt(6));
                    tmp.Nacionalidad = toModify.ElementAt(7);
                    tmp.Email = toModify.ElementAt(8);
                    tmp.IdPatologia = Int16.Parse(toModify.ElementAt(9));
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toModify.ElementAt(0)) == 4)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    ESTADO tmp = db.ESTADO.Where(d => d.Estado1 == toModify.ElementAt(1)).First();
                    tmp.Estado1 = toModify.ElementAt(1);
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toModify.ElementAt(0)) == 5)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDICAMENTO tmp = db.MEDICAMENTO.Where(d => d.Medicamento1 == toModify.ElementAt(1)).First();
                    tmp.Medicamento1 = toModify.ElementAt(1);
                    tmp.CasaFarmaceutica = toModify.ElementAt(2);
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toModify.ElementAt(0)) == 6)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDIDA_SANITARIA tmp = db.MEDIDA_SANITARIA.Where(d => d.NombreMedida == toModify.ElementAt(1)).First();
                    tmp.NombreMedida = toModify.ElementAt(1);
                    tmp.Descripcion = toModify.ElementAt(2);
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toModify.ElementAt(0)) == 7)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    PACIENTE tmp = db.PACIENTE.Where(d => d.NumIdentificacion == toModify.ElementAt(3)).First();
                    tmp.NombrePaciente = toModify.ElementAt(1);
                    tmp.Apellidos = toModify.ElementAt(2);
                    tmp.NumIdentificacion = toModify.ElementAt(3);
                    tmp.Edad = Int16.Parse(toModify.ElementAt(4));
                    tmp.IdLugar = Int16.Parse(toModify.ElementAt(5));
                    tmp.Nacionalidad = toModify.ElementAt(6);
                    tmp.IdEstado = Int16.Parse(toModify.ElementAt(7));
                    tmp.IdContactos = toModify.ElementAt(8);
                    tmp.Email = toModify.ElementAt(9);
                    tmp.Internado = toModify.ElementAt(10);
                    tmp.IdPatologia = Int16.Parse(toModify.ElementAt(11));
                    tmp.IdMedicamento = Int16.Parse(toModify.ElementAt(12));
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toModify.ElementAt(0)) == 8)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    PATOLOGIA tmp = db.PATOLOGIA.Where(d => d.NombrePatologia == toModify.ElementAt(1)).First();
                    tmp.NombrePatologia = toModify.ElementAt(1);
                    tmp.Descripcion = toModify.ElementAt(2);
                    tmp.Sintomas = toModify.ElementAt(3);
                    tmp.Tratamiento = toModify.ElementAt(4);
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toModify.ElementAt(0)) == 10)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDIDAS_PAIS tmp = db.MEDIDAS_PAIS.Where(d => d.IdLugar == Int16.Parse(toModify.ElementAt(1))).First();
                    tmp.Estado = toModify.ElementAt(2);
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toModify.ElementAt(0)) == 11)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    ESTADO_PACIENTE tmp = db.ESTADO_PACIENTE.Where(d => d.IdPaciente == Int16.Parse(toModify.ElementAt(1))).First();
                    tmp.IdPaciente = Int16.Parse(toModify.ElementAt(1));
                    tmp.IdEstado = Int16.Parse(toModify.ElementAt(2));
                    db.Entry(tmp).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }
        }


        void Delete(List<string> toDelete)
        {
            if (Int16.Parse(toDelete.ElementAt(0)) == 1)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    LUGAR tmp  = db.LUGAR.Where(d => d.Provincia == toDelete.ElementAt(1)).First();
                    db.LUGAR.Remove(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toDelete.ElementAt(0)) == 2)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    CENTRO_HOSPITALARIO tmp = db.CENTRO_HOSPITALARIO.Where(d => d.NombreHospital == toDelete.ElementAt(1)).First();
                    db.CENTRO_HOSPITALARIO.Remove(tmp);
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toDelete.ElementAt(0)) == 3)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    CONTACTO tmp = db.CONTACTO.Where(d => d.NumIdentificacionContacto == toDelete.ElementAt(1)).First();
                    db.CONTACTO.Remove(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toDelete.ElementAt(0)) == 4)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    ESTADO tmp = db.ESTADO.Where(d => d.Estado1 == toDelete.ElementAt(1)).First();
                    db.ESTADO.Remove(tmp);
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toDelete.ElementAt(0)) == 5)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDICAMENTO tmp = db.MEDICAMENTO.Where(d => d.Medicamento1 == toDelete.ElementAt(1)).First();
                    db.MEDICAMENTO.Remove(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toDelete.ElementAt(0)) == 6)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDIDA_SANITARIA tmp = db.MEDIDA_SANITARIA.Where(d => d.NombreMedida == toDelete.ElementAt(1)).First();
                    db.MEDIDA_SANITARIA.Remove(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toDelete.ElementAt(0)) == 7)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    PACIENTE tmp = db.PACIENTE.Where(d => d.NumIdentificacion == toDelete.ElementAt(1)).First();
                    db.PACIENTE.Remove(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toDelete.ElementAt(0)) == 8)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    PATOLOGIA tmp = db.PATOLOGIA.Where(d => d.NombrePatologia == toDelete.ElementAt(1)).First();
                    db.PATOLOGIA.Remove(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toDelete.ElementAt(0)) == 11)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    ESTADO_PACIENTE tmp = db.ESTADO_PACIENTE.Where(d => d.IdPaciente == Int16.Parse(toDelete.ElementAt(1))).First();
                    db.ESTADO_PACIENTE.Remove(tmp);
                    db.SaveChanges();
                }
            }

            
        }

        void Add(List<string> toAdd)
        {
            if (Int16.Parse(toAdd.ElementAt(0)) == 1)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    LUGAR tmp = new LUGAR()
                    {
                        Pais = toAdd.ElementAt(1),
                        Estado = toAdd.ElementAt(2),
                        Region = toAdd.ElementAt(3),
                        Provincia = toAdd.ElementAt(4),
                    };
                    db.LUGAR.Add(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toAdd.ElementAt(0)) == 2)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    CENTRO_HOSPITALARIO tmp = new CENTRO_HOSPITALARIO()
                    {
                        NombreHospital = toAdd.ElementAt(1),
                        Director = toAdd.ElementAt(2),
                        Contacto = toAdd.ElementAt(3),
                        IdLugar = Int16.Parse(toAdd.ElementAt(4)),
                        Capacidad = Int16.Parse(toAdd.ElementAt(5)),
                    };
                    db.CENTRO_HOSPITALARIO.Add(tmp);
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toAdd.ElementAt(0)) == 3)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    CONTACTO tmp = new CONTACTO()
                    {
                        NombreContacto = toAdd.ElementAt(1),
                        IdPaciente = Int16.Parse(toAdd.ElementAt(2)),
                        Apellidos = toAdd.ElementAt(3),
                        NumIdentificacionContacto = toAdd.ElementAt(4),
                        Edad = Int16.Parse(toAdd.ElementAt(5)),
                        IdLugar = Int16.Parse(toAdd.ElementAt(6)),
                        Nacionalidad = toAdd.ElementAt(7),
                        Email = toAdd.ElementAt(8),
                        IdPatologia = Int16.Parse(toAdd.ElementAt(9)),
                    };
                    db.CONTACTO.Add(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toAdd.ElementAt(0)) == 4)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    ESTADO tmp = new ESTADO()
                    {
                        Estado1 = toAdd.ElementAt(1),
                        
                    };
                    db.ESTADO.Add(tmp);
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toAdd.ElementAt(0)) == 5)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDICAMENTO tmp = new MEDICAMENTO()
                    {
                        Medicamento1 = toAdd.ElementAt(1),
                        CasaFarmaceutica = toAdd.ElementAt(2),
                    
                    };
                    db.MEDICAMENTO.Add(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toAdd.ElementAt(0)) == 6)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDIDA_SANITARIA tmp = new MEDIDA_SANITARIA()
                    {
                        NombreMedida = toAdd.ElementAt(1),
                        Descripcion = toAdd.ElementAt(2),
                    };
                    db.MEDIDA_SANITARIA.Add(tmp);
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toAdd.ElementAt(0)) == 7)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    PACIENTE tmp = new PACIENTE()
                    {
                        NombrePaciente = toAdd.ElementAt(1),
                        Apellidos = toAdd.ElementAt(2),
                        NumIdentificacion = toAdd.ElementAt(3),
                        Edad = Int16.Parse(toAdd.ElementAt(4)),
                        IdLugar = Int16.Parse(toAdd.ElementAt(5)),
                        Nacionalidad = toAdd.ElementAt(6),
                        IdEstado = Int16.Parse(toAdd.ElementAt(7)),
                        IdContactos = toAdd.ElementAt(8),
                        Email = toAdd.ElementAt(9),
                        Internado = toAdd.ElementAt(10),
                        IdPatologia = Int16.Parse(toAdd.ElementAt(11)),
                        IdMedicamento = Int16.Parse(toAdd.ElementAt(12)),
                    };
                    db.PACIENTE.Add(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toAdd.ElementAt(0)) == 8)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    PATOLOGIA tmp = new PATOLOGIA()
                    {
                        NombrePatologia = toAdd.ElementAt(1),
                        Descripcion = toAdd.ElementAt(2),
                        Sintomas = toAdd.ElementAt(3),
                        Tratamiento = toAdd.ElementAt(4),
                    };
                    db.PATOLOGIA.Add(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toAdd.ElementAt(0)) == 9)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    REPORTES_ESTADOS tmp = new REPORTES_ESTADOS()
                    {
                        IdLugar = Int16.Parse(toAdd.ElementAt(1)),
                        Contagiados = Int16.Parse(toAdd.ElementAt(2)),
                        Recuperados = Int16.Parse(toAdd.ElementAt(3)),
                        Muertos = Int16.Parse(toAdd.ElementAt(4)),
                        Activos = Int16.Parse(toAdd.ElementAt(5)),

                    };
                    db.REPORTES_ESTADOS.Add(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toAdd.ElementAt(0)) == 10)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    MEDIDAS_PAIS tmp = new MEDIDAS_PAIS()
                    {
                        IdLugar = Int16.Parse(toAdd.ElementAt(1)),
                        IdMedidaSanitaria = Int16.Parse(toAdd.ElementAt(2)),
                        Estado = toAdd.ElementAt(3),
                        
                    };
                    db.MEDIDAS_PAIS.Add(tmp);
                    db.SaveChanges();
                }
            }


            if (Int16.Parse(toAdd.ElementAt(0)) == 11)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    ESTADO_PACIENTE tmp = new ESTADO_PACIENTE()
                    {
                        IdPaciente = Int16.Parse(toAdd.ElementAt(1)),
                        IdEstado = Int16.Parse(toAdd.ElementAt(2)),

                    };
                    db.ESTADO_PACIENTE.Add(tmp);
                    db.SaveChanges();
                }
            }

            if (Int16.Parse(toAdd.ElementAt(0)) == 12)
            {
                using (CoTECEntities db = new CoTECEntities())
                {
                    REPORTES_CASOS tmp = new REPORTES_CASOS()
                    {
                        IdLugar = Int16.Parse(toAdd.ElementAt(1)),
                        CasosNuevos = Int16.Parse(toAdd.ElementAt(2)),
                        Muertes = Int16.Parse(toAdd.ElementAt(2)),

                    };
                    db.REPORTES_CASOS.Add(tmp);
                    db.SaveChanges();
                }
            }
        }
    }
}
