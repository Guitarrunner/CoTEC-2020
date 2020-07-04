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
    public class PACIENTEController : Controller
    {
        private readonly AppDBContext context;
        public PACIENTEController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<PACIENTEController>
        [HttpGet]
        public IEnumerable<PACIENTE> Get()
        {
            return context.PACIENTE.ToList();
        }

        // GET api/<PACIENTEController>/5
        [HttpGet("{id}")]
        public PACIENTE Get(int id)
        {
            var centro = context.PACIENTE.FirstOrDefault(p => p.IdPaciente == id);
            return centro;
        }

        // POST api/<PACIENTEController>
        [HttpPost]
        public ActionResult Post([FromBody] PACIENTE value)
        {
            try
            {
                context.PACIENTE.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<PACIENTEController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] PACIENTE value)
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

        // DELETE api/<PACIENTEController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.PACIENTE.FirstOrDefault(p => p.IdPaciente == id);
            if (value != null)
            {
                context.PACIENTE.Remove(value);
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
