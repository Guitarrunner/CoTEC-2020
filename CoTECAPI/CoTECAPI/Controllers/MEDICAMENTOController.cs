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
    public class MEDICAMENTOController : Controller
    {
        private readonly AppDBContext context;
        public MEDICAMENTOController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<MEDICAMENTOController>
        [HttpGet]
        public IEnumerable<MEDICAMENTO> Get()
        {
            return context.MEDICAMENTO.ToList();
        }

        // GET api/<MEDICAMENTOController>/5
        [HttpGet("{id}")]
        public MEDICAMENTO Get(int id)
        {
            var centro = context.MEDICAMENTO.FirstOrDefault(p => p.IdMedicamento == id);
            return centro;
        }

        // POST api/<MEDICAMENTOController>
        [HttpPost]
        public ActionResult Post([FromBody] MEDICAMENTO value)
        {
            try
            {
                context.MEDICAMENTO.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<MEDICAMENTOController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] MEDICAMENTO value)
        {
            if (value.IdMedicamento == id)
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

        // DELETE api/<MEDICAMENTOController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.MEDICAMENTO.FirstOrDefault(p => p.IdMedicamento == id);
            if (value != null)
            {
                context.MEDICAMENTO.Remove(value);
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
