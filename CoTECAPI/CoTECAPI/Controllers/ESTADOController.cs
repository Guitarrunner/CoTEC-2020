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
    public class ESTADOController : Controller
    {
        private readonly AppDBContext context;
        public ESTADOController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<ESTADOController>
        [HttpGet]
        public IEnumerable<ESTADO> Get()
        {
            return context.ESTADO.ToList();
        }

        // GET api/<ESTADOController>/5
        [HttpGet("{id}")]
        public ESTADO Get(int id)
        {
            var centro = context.ESTADO.FirstOrDefault(p => p.IdEstado == id);
            return centro;
        }

        // POST api/<ESTADOController>
        [HttpPost]
        public ActionResult Post([FromBody] ESTADO value)
        {
            try
            {
                context.ESTADO.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<ESTADOController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] ESTADO value)
        {
            if (value.IdEstado == id)
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

        // DELETE api/<ESTADOController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.ESTADO.FirstOrDefault(p => p.IdEstado == id);
            if (value != null)
            {
                context.ESTADO.Remove(value);
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
