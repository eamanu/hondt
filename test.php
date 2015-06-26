<html>
	<head>
		<script type = "text/javascript" src = "js/hondt.js"></script>
		<script tyoe = "text/javascript">
			var partidos_votos = [{nombre: "Partido1", votos: 340000}, {nombre:"Partido2", votos:280000}, {nombre: "Partido3", votos:160000}, {nombre:"Partido4", votos:60000}, {nombre:"Partido5", votos:15000}];

			var votosEnBlanco = 0;
			var escanos = 7;

			hondt.newHondt(votosEnBlanco,escanos,partidos_votos);
			hondt.calcularHondt();
			var resultado = hondt.giveMeResult();
			
			for(var i = 0; i< 7; i++){
				document.write(i+" - "+resultado[i].nombre +" - "+resultado[i].votos);
				document.write("<br>")
			}
			<?php $resultado = "<script>document.write(resultado);</script>"?>
		</script>
	</head>
	<body>
		<?php
			
		?>
	</body>
</html>