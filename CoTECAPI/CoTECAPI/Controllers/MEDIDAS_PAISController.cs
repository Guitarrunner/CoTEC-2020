using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoTECAPI.Contextos;
using CoTECAPI.Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoTECAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class MEDIDAS_PAISController : Controller
    {
        private readonly AppDBContext context;
        public MEDIDAS_PAISController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<MEDIDAS_PAISController>
        [HttpGet]
        public IEnumerable<MEDIDAS_PAIS> Get()
        {
            return context.MEDIDAS_PAIS.ToList();
        }

        // GET api/<MEDIDAS_PAISController>/5
        [HttpGet("{id}")]
        public MEDIDAS_PAIS Get(int id)
        {
            var centro = context.MEDIDAS_PAIS.FirstOrDefault(p => p.IdMedidaSanitaria == id);
            return centro;
        }

        // POST api/<MEDIDAS_PAISController>
        [HttpPost]
        public ActionResult Post([FromBody] MEDIDAS_PAIS value)
        {
            try
            {
                context.MEDIDAS_PAIS.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<MEDIDAS_PAISController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] MEDIDAS_PAIS value)
        {
            if (value.IdMedidasPais == id)
            {
                context.Entry(value).State = EntityState.Modified;
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE api/<MEDIDAS_PAISController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.MEDIDAS_PAIS.FirstOrDefault(p => p.IdMedidasPais == id);
            if (value != null)
            {
                context.MEDIDAS_PAIS.Remove(value);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
