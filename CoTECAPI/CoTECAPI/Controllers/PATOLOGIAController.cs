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
    public class PATOLOGIAController : Controller
    {
        private readonly AppDBContext context;
        public PATOLOGIAController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<PATOLOGIAController>
        [HttpGet]
        public IEnumerable<PATOLOGIA> Get()
        {
            return context.PATOLOGIA.ToList();
        }

        // GET api/<PATOLOGIAController>/5
        [HttpGet("{id}")]
        public PATOLOGIA Get(int id)
        {
            var centro = context.PATOLOGIA.FirstOrDefault(p => p.IdPatologia == id);
            return centro;
        }

        // POST api/<PATOLOGIAController>
        [HttpPost]
        public ActionResult Post([FromBody] PATOLOGIA value)
        {
            try
            {
                context.PATOLOGIA.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<PATOLOGIAController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] PATOLOGIA value)
        {
            if (value.IdPatologia == id)
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

        // DELETE api/<PATOLOGIAController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.PATOLOGIA.FirstOrDefault(p => p.IdPatologia == id);
            if (value != null)
            {
                context.PATOLOGIA.Remove(value);
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
