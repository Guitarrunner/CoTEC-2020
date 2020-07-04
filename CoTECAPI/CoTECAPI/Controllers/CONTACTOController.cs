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
    public class CONTACTOController : Controller
    {
        private readonly AppDBContext context;
        public CONTACTOController(AppDBContext context)
        {
            this.context = context;
        }
        // GET api/<CONTACTOController>
        [HttpGet]
        public IEnumerable<CONTACTO> Get()
        {
            return context.CONTACTO.ToList();
        }

        // GET api/<CONTACTOController>/5
        [HttpGet("{id}")]
        public CONTACTO Get(int id)
        {
            var centro = context.CONTACTO.FirstOrDefault(p => p.IdContacto == id);
            return centro;
        }

        // POST api/<CONTACTOController>
        [HttpPost]
        public ActionResult Post([FromBody] CONTACTO value)
        {
            Console.WriteLine("perro1");
            try
            {
                context.CONTACTO.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<CONTACTOController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] CONTACTO value)
        {
            if (value.IdContacto == id)
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

        // DELETE api/<CONTACTOController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.CONTACTO.FirstOrDefault(p => p.IdContacto == id);
            if (value != null)
            {
                context.CONTACTO.Remove(value);
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
