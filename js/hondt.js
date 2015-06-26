var datos={
	votosBlanco:0,
	escanos:0,
	part_votos:[],
}

var porcentajeListon =3 ;
var CantidadVotosTotales = 0;
var a_partidos_totales = [];
var a_partidos_escanos = [];
var resultado = [];


var hondt = {
	newHondt: function(_votosEnBlanco, _escanos, _part_votos){
		datos.votosBlanco = _votosEnBlanco;
		datos.escanos = _escanos;
		datos.part_votos = _part_votos;

		a_partidos_totales = [];
	},

	calcularHondt: function(){
		var partidos = datos.part_votos;
		partidos = this.eliminarListon(partidos);
			
		for(var i  = 0; i< partidos.length; i++){
			var votos = partidos[i].votos;
			for(var j  = 1; j <= datos.escanos; j++){
				votos = partidos[i].votos/j;
				a_partidos_totales.push([partidos[i].nombre, j, votos]);
			}
		}

		a_partidos_escanos = this.ordenarEscanos(a_partidos_totales);
		
	},

	ordenarEscanos: function(_partidos_totales){ /*Método de la burbuja*/
		var aux = 0, auxName = "", auxPos = 0, flag;
		do{
			flag = 0;
			for(var i = 0; i <_partidos_totales.length; i++){
				for(var j = 0; j<(_partidos_totales.length - 1); j++){
					if(_partidos_totales[j][2] < _partidos_totales[j+1][2]){
						aux = _partidos_totales[j][2];
						auxPos = _partidos_totales[j][1];
						auxName = _partidos_totales[j][0];

						_partidos_totales[j][2] = _partidos_totales[j+1][2];
						_partidos_totales[j][1] = _partidos_totales[j+1][1];
						_partidos_totales[j][0] = _partidos_totales[j+1][0];

						_partidos_totales[j+1][2] = aux;
						_partidos_totales[j+1][1] = auxPos;
						_partidos_totales[j+1][0] = auxName;

						flag = 1
					}
				}
			}	
		}while(flag == 1);

		return _partidos_totales;
	},
	
	giveMeResult: function(){
		var aux = [];
		for(var i = 0; i < datos.escanos; i++){
			aux = {nombre: a_partidos_escanos[i][0], votos: a_partidos_escanos[i][2]};
			resultado.push(aux);
		}

		return resultado;
	},
	eliminarListon: function(_partidos){
		var TotalVotantes = this.getVotosTotales(_partidos) + datos.votosBlanco;
		var liston = porcentajeListon * TotalVotantes / 100; /*Liston*/
		for(var i  = 0; i < _partidos.length; i++){
			if (_partidos[i].votos < liston){
				_partidos[i].votos = 0;
			}
		}
		return _partidos;
	},
	getVotosTotales: function(_partidos){
		for(var i = 0; i < _partidos.length; i++){
			CantidadVotosTotales += _partidos[i].votos;
		}
		return CantidadVotosTotales;
	}
}

