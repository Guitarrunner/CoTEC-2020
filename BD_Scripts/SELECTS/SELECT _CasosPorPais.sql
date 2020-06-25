
--Ver informacion de Pais, Contagiados, Muertos, Recuperados, Activos
--Filtrado por Pais
SELECT Pais, Contagiados, Muertos, Recuperados, Activos
FROM REPORTES_ESTADOS AS RE, LUGAR AS L
WHERE RE.IdLugar = L.IdLugar AND Pais = 'China'



