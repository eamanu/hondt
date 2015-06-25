var datos={
	votosBlanco:0,
	escanos:0,
	part_votos:[],
}

var porcentajeListon =3 ;
var CantidadVotosTotales = 0;
var a_partidos_totales = [];

var hondt = {
	newHondt: function(_votosEnBlanco, _escanos, _part_votos){
		datos.votosBlanco = 0;
		datos.escanos = 5;
		datos.part_votos = [{nombre:"pipo", votos:"120000"}, {nombre:"pipo", votos:"18563"}, {nombre:"pipo", votos:"180000"}, {nombre:"pipo", votos:"120031"}, {nombre:"pipo", votos:"87963"}]; 
	},
	calcularHondt: function(){
		var partidos = datos.part_votos;
		this.eliminarListon(partidos);
			
		for(var i  = 0; i< partidos.length; i++){
			for(var j  = 1; j <= datos.escanos; j++){
				a_partidos_totales.push([partidos[i].nombre, j, partidos[i].votos/j]);
			}
		}
	},
	
	print: function(){
		for(var  i = 0; i< a_partidos_totales.length; i++){
			console.log(a_partidos_totales[i][0]+" - "+a_partidos_totales[i][1]+" - "+a_partidos_totales[i][2]);
		}
	},
	eliminarListon: function(_partidos){
		var TotalVotantes = this.getVotosTotales(_partidos) + datos.votosBlanco;
		var liston = porcentajeListon * TotalVotantes / 100; /*Liston*/
		for(var i  = 0; i <= _partidos.length; i++){
			if (_partidos[i] < liston){
				_partidos[i] = 0;
			}
		}
		return _partidos;
	},
	getVotosTotales: function(_partidos){
		for(var i = 0; i <= _partidos.length; i++){
			CantidadVotosTotales += _partidos[i];
		}
		return CantidadVotosTotales;
	}
}

