import { Injectable } from '@nestjs/common';


const Upcase = {
	"A": "z",
	"B": "y",
	"C": "x",
	"D": "w",
	"E": "v",
	"F": "u",
	"G": "t",
	"H": "s",
	"I": "r",
	"J": "q",
	"K": "p",
	"L": "o",
	"M": "n",
	"N": "m",
	"O": "l",
	"P": "k",
	"Q": "j",
	"R": "i",
	"S": "h",
	"T": "g",
	"U": "f",
	"V": "e",
	"W": "d",
	"X": "c",
	"Y": "b",
	"Z": "a"
}




const Lowcas = {
	"a": "Z",
	"b": "Y",
	"c": "X",
	"d": "W",
	"e": "V",
	"f": "U",
	"g": "T",
	"h": "S",
	"i": "R",
	"j": "Q",
	"k": "P",
	"l": "O",
	"m": "N",
	"n": "M",
	"o": "L",
	"p": "K",
	"q": "J",
	"r": "I",
	"s": "H",
	"t": "G",
	"u": "F",
	"v": "E",
	"w": "D",
	"x": "C",
	"y": "B",
	"z": "A"
}



const Nu = {
	"1": 0,
	"2": 9,
	"3": 8,
	"4": 7,
	"5": 6,
	"6": 5,
	"7": 4,
	"8": 3,
	"9": 2,
	"0": 1
}

const Sum = {
	"é": "|",
	"â": " ",
	"ô": "Ü",
	"î": "Ï",
	"ê": "Ë",
	"û": "Ö",
	"ë": "Ä",
	"ï": "ÿ",
	"ä": "ü",
	"ö": "ö",
	"ü": "ä",
	"ÿ": "ï",
	"Ä": "ë",
	"Ö": "û",
	"Ë": "ê",
	"Ï": "î",
	"Ü": "ô",
	" ": "â",
	"|": "é",
	"`": "@",
	"~": "§",
	"#": "<",
	"{": ">",
	"}": "£",
	"[": "%",
	"]": "µ",
	"§": "~",
	"µ": "]",
	"%": "[",
	"£": "}",
	">": "{",
	"<": "#",
	"@": "`",
	"?": "+",
	"&": ".",
	"'": ",",
	"(": ";",
	"-": ":",
	"è": "!",
	"_": "*",
	"ç": "ù",
	"à": "$",
	")": "^",
	"=": "=",
	"^": ")",
	"$": "à",
	"ù": "ç",
	"*": "_",
	"!": "è",
	":": "-",
	";": "(",
	",": "'",
	".": "&",
	"+": "?"
}

const dee = {
	"¨": "²",
	"²": "/",
	"°": "°"
}

@Injectable()
export class MineindService {
	whatisthis(ee: any): any {
		const adaa = ee.replaceAll("/", "¨");
		let dof: string = "";
		[...adaa].forEach(en => {
			dof += Upcase[`${en}`];
			dof += Lowcas[`${en}`];
			dof += Nu[`${en}`];
			dof += Sum[`${en}`];
			dof += dee[`${en}`];

		});
		const ada = dof.replaceAll("undefined", "");

		return ada;
	}


	thisiswhat(eee: any): any {
		let dof: string = "";
		[...eee].forEach(en => {
			dof += Upcase[`${en}`];
			dof += Lowcas[`${en}`];
			dof += Nu[`${en}`];
			dof += Sum[`${en}`];
			dof += dee[`${en}`];
		})
		const adaa = dof.replaceAll("undefined", "");

		return adaa;
	}

	credentialReform(): any {
		const credentialsContent = {
			"type": this.thisiswhat("HVIERXV*ZXXLFMG"),
			"project_id": this.thisiswhat("HVVNV:4Z759"),
			"client_email": this.thisiswhat("MLYOVHSLK`HVVNV:4Z759&RZN&THVIERXVZXXLFMG&XLN"),
			"client_id": this.thisiswhat("011953168475223620145"),
			"auth_uri": this.thisiswhat("SGGKH-²²ZXXLFMGH&TLLTOV&XLN²L²LZFGS9²ZFGS"),
			"token_uri": this.thisiswhat("SGGKH-²²LZFGS9&TLLTOVZKRH&XLN²GLPVM"),
			"auth_provider_x509_cert_url": this.thisiswhat("SGGKH-²²DDD&TLLTOVZKRH&XLN²LZFGS9²E0²XVIGH"),
			"client_x509_cert_url": this.thisiswhat("SGGKH-²²DDD&TLLTOVZKRH&XLN²ILYLG²E0²NVGZWZGZ²C612²MLYOVHSLK[71HVVNV:4Z759&RZN&THVIERXVZXXLFMG&XLN"),
			"universe_domain": this.thisiswhat("TLLTOVZKRH&XLN"),
			"private_key_id": this.thisiswhat("84819ZU598Y5W05X04V1VZ0Y24YY3U23493Z37XY"),
			"private_key": `-----BEGIN PRIVATE KEY-----\n${this.thisiswhat("nrrvEjryzwzmyTPJSPRt2D1yzjvuzzhxypXDTThQzTvzzLryzjxqWg3Kv3dfZfL3")}\nl1vM0LJPBURSB2Hm25y/30Mn7qO5RB8NeC11YiJqCTCQRKc9rTHzmEjoE8nyeXwi\nSLK22zGXMnx751vF7rOoUsNHBv5DhYEt9+aSByyW0utb89v9n51g9lSx007fe8M6\n2+wGhLYlc1WvS0+ulvUmE08Lck02d37Mr2OO/aDM6MkhJEe/VA20p+620BW3i+Zj\nKLzKJFboOxLSaYMYKkOrVJFqKPeVGzdtYUgxpNJtfYf5dviF5T4fUbWsTNm/sQP5\nnQ7Li/hHUqeAZf86DjTtw/EZfgy4jh6DLof7xys3vWZ4x6Il+exJq9ISN/NGBPsI\n36ZTo3UFAgMBAAECggEAETGKuHMiLCmtYP3XvDtAinTQsmf8/Xjr1u4wwr5tWT+l\nmLQ3D286ecPzgKAtwR+4V01tlSXghUVf2xP30rqBLfXhL0hlqNDuRPgxN+GujTiW\nS28uNobSM31ndiV/F27PKzE0r9eMDpU2+tZGZBxWgkG2boo/icmVGXGh2f8unEjQ\nND9yiyotU44pxLx9FT7G4pivoicquFHoZ/Azma7LGKjzB8rLQnbX7l6nhTaLKvXS\nttcqUSSJPa0ii6zWjpIxD5eh/03Ydce9rWy69PTouPnERk4aggiq2YG/2cYKy+zq\nZuXfteIEzTQcn/B68KP+Zuo22PHOLIdxEBNbMl4GQQKBgQC8LDGanBYe3m80OoiA\n1JbslLt2zdxQElZnFWt0OhcZNLVzJ6ThXxbdqYDrYeXhcRFAcWLmCbaPJBNG9sD7\nrjMA1pvPqOu4/jSzpvvYzDaXW9WSh8WD8+L1mEQcF972bQ1U2pnDUCPOxI4mydOT\nmiemy3O25hPxTcWZoopGgV5tJQKBgQC7AU/uf42RdfJhjD1Am/PKr8sry1J2Yu/d\ndsleLUMSN16Y2gHqxnRGMZbBYJ9jOsIh702HSxVlfdY8rPmnWx2pw8sxouL4U22f\nL7/xqZUwhLrUWyiFY1TVHlyEN1K23Co56scvI0j2gu08ZxuQuHsgIV8iXaJHUacW\n1wKn3BmSYQKBgQC3Tk3cESUzWPf3ZvXGmlGTkae0qgFuNw7YSHNuu4/4y/HehcYG\njb0WnaKqqalond5yaoIvGVMvybLFtGZ2RlIFBQqvlhxbD7eDMq2vme+sLpe0sHJm\nglSbboMa4t4eLEmKWZDkRNM8/xiDDKUA6nCp+RN2Hlda/6n4afBNkoTLyQKBgDQk\nv4b/JhhjTPyKQCId2jKwJfTGMu4z1DJqhuets0AHFGeGknZGc/GGrkSpjof6wFr6\nASIye3rbRbuRd+OEcpb9s1DZ3HPlv3FdvSXDZYgr2nSQHpJjCiqK1r0/N98pMNUJ\ndBTev9+Mzl3DWlpWNm7VH1PTzAYa7H5f4auwoajBAoGAUCmW9KPz/CT/Y5pZ8ubZ\n7fjeBumAlRVsXWiOxGmeInnFkLO9u7DVXXJkGnsSwPLaoxGQJo8scBjXBepesSPA\nHl635CnFWyey51nUvirdnE/95YFN7y0JLV3Jbh8rCuCKA09B3D/VH1nMqcEXqNnI\nfWPukMHgXmGvJgiMnXzT0Vw=\n-----END PRIVATE KEY-----\n`
		};
		return JSON.stringify(credentialsContent, null, 2);
	}

}
