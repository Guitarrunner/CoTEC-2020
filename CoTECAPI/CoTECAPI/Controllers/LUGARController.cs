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
    public class LUGARController : Controller
    {
        private readonly AppDBContext context;
        public LUGARController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<LUGARController>
        [HttpGet]
        public IEnumerable<LUGAR> Get()
        {
            return context.LUGAR.ToList();
        }

        // GET api/<LUGARController>/5
        [HttpGet("{id}")]
        public LUGAR Get(int id)
        {
            var centro = context.LUGAR.FirstOrDefault(p => p.IdLugar == id);
            return centro;
        }

        // POST api/<LUGARController>
        [HttpPost]
        public ActionResult Post([FromBody] LUGAR value)
        {
            try
            {
                context.LUGAR.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<LUGARController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] LUGAR value)
        {
            if (value.IdLugar == id)
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

        // DELETE api/<LUGARController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.LUGAR.FirstOrDefault(p => p.IdLugar == id);
            if (value != null)
            {
                context.LUGAR.Remove(value);
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
