--MEDIDA POR ID, regresa el idMedidaSanitaria.
--Para la acción de MODIFY
SELECT NombreMedida, Descripcion
FROM MEDIDA_SANITARIA
WHERE IdMedidaSanitaria = 2;

--MEDIDA POR PAIS Y FECHA, regresa la medida y la fecha.
--Para la acción de MODIFY en la web
--FALTA DETALLE DE LA FECHA
SELECT MS.NombreMedida, MP.Fecha
FROM MEDIDAS_PAIS AS MP, MEDIDA_SANITARIA AS MS
WHERE MS.IdMedidaSanitaria=MP.IdMedidaSanitaria
      AND MP.IdLugar IN (SELECT IdLugar
                         FROM LUGAR AS L
                         WHERE Pais='China' AND
                               L.IdLugar = MP.IdLugar);