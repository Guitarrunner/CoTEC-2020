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
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class ESTADO_PACIENTEController : Controller
    {
        private readonly AppDBContext context;
        public ESTADO_PACIENTEController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<ESTADO_PACIENTEController>
        [HttpGet]
        public IEnumerable<ESTADO_PACIENTE> Get()
        {
            return context.ESTADO_PACIENTE.ToList();
        }

        // GET api/<ESTADO_PACIENTEController>/5
        [HttpGet("{id}")]
        public ESTADO_PACIENTE Get(int id)
        {
            var centro = context.ESTADO_PACIENTE.FirstOrDefault(p => p.IdPaciente == id);
            return centro;
        }

        // POST api/<ESTADO_PACIENTEController>
        [HttpPost]
        public ActionResult Post([FromBody] ESTADO_PACIENTE value)
        {
            try
            {
                context.ESTADO_PACIENTE.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<ESTADO_PACIENTEController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] ESTADO_PACIENTE value)
        {
            if (value.IdPaciente == id)
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

        // DELETE api/<ESTADO_PACIENTEController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.ESTADO_PACIENTE.FirstOrDefault(p => p.IdPaciente == id);
            if (value != null)
            {
                context.ESTADO_PACIENTE.Remove(value);
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
