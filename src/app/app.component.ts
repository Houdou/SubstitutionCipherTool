import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
	public alphabets: string = "abcdefghijklmnopqrstuvwxyz";

	public engFreq: Map<string, number> = new Map<string, number>([
		['e', 12.7],
		['t', 9.1],
		['a', 8.2],
		['o', 7.5],
		['i', 7.0],
		['n', 6.8],
		['s', 6.3],
		['h', 6.1],
		['r', 6.0],
		['d', 4.3],
		['l', 4.0],
		['u', 2.8],
		['c', 2.8],
		['w', 2.4],
		['m', 2.4],
		['f', 2.2],
		['y', 2.0],
		['g', 2.0],
		['p', 1.9],
		['b', 1.5],
		['v', 1.0],
		['k', 0.8],
		['x', 0.2],
		['j', 0.2],
		['z', 0.1],
		['q', 0.1],
	]);
	public engFreqRank: Array<string> = ['e', 't', 'a', 'o', 'i', 'n', 's', 'h', 'r', 'd', 'l', 'u', 'c', 'w', 'm', 'f', 'y', 'g', 'p', 'b', 'v', 'k', 'x', 'j', 'z', 'q']

	public cipherFreq: Map<string, number>;

	public mapping: Map<string, string>;
	public mappingConfirmed: Map<string, boolean>;

	@ViewChild('cipher')
	private cipiherTextDiv: ElementRef;

	@ViewChild('message')
	private messageTextDiv: ElementRef;

	@ViewChild('mappings')
	private mappingsDiv: ElementRef;

	@ViewChild('hint')
	private hintDiv: ElementRef;

	private mappingsField: Array<HTMLInputElement>;

	public cipher: string = "";

	constructor() {
		this.cipherFreq = new Map<string, number>();
		this.mapping = new Map<string, string>();
		this.mappingConfirmed = new Map<string, boolean>();

		this.alphabets.split('').forEach(c => {
			this.mapping.set(c, c);
			this.mappingConfirmed.set(c, false);
		});
	}

	ngAfterViewInit() {
		this.cipher = this.cipiherTextDiv.nativeElement.value;
		this.mappingsField = this.mappingsDiv.nativeElement.querySelectorAll('input');
		this.calcfreq(this.cipher);
		this.initMap();
		this.messageTextDiv.nativeElement.innerHTML = this.build(this.map());

	}

	public calcfreq(str: string): void {
		let count = new Map<string, number>();
		this.alphabets.split('').forEach(s => {
			count.set(s, 0);
		});
		let total = 0;
		str.toLowerCase().split('').forEach(s => {
			if(/[a-z]/.test(s)) {
				count.set(s, count.get(s) + 1);
				total++;
			}
		});
		this.alphabets.split('').forEach(s => {
			this.cipherFreq.set(s, ~~(1000 * count.get(s) / total) / 10);
		});
	}

	public initMap(): void {
		let cipherFreqRank = [];
		this.cipherFreq.forEach((freq, s) => {
			let i = -1;
			if(!cipherFreqRank.some(c => { return i++, this.cipherFreq.get(c) < freq;}))
				cipherFreqRank.push(s);
			else
				cipherFreqRank.splice(i, 0, s);
		});
		let mapHint = [];
		for(let i = 0; i < cipherFreqRank.length; i++) {
			this.mapping.set(cipherFreqRank[i], this.engFreqRank[i]);
			mapHint.push(`<div class="hint-row">${cipherFreqRank[i]}: ${this.cipherFreq.get(cipherFreqRank[i].toLowerCase())}
				\t - \t${this.engFreqRank[i]}: ${this.engFreq.get(this.engFreqRank[i].toLowerCase())}</div>`)
		}
		this.hintDiv.nativeElement.innerHTML = mapHint.join('');
		for(let i = 0; i < this.alphabets.length; i++) {
			this.mappingsField[i].value = this.mapping.get(this.mappingsField[i].name);
		}
	}

	public map(): Array<string> {
		let msg = this.cipher.split('').map(s => {
			s = s.toLowerCase();
			let c = this.mapping.get(s);
			return c == undefined ? s : c;
		});
		return msg;
	}

	public build(str: Array<string>): string {
		let h = str.map(s => {
			if(!/[a-z]/.test(s) || !this.mappingConfirmed.get(s)) {
				return s;
			} else {
				return `<span style="color: #FFAAAA">${s}</span>`;
			}
		})
		return h.join('');
	}

	public rebuild(): void {
		this.messageTextDiv.nativeElement.innerHTML = this.build(this.map());
	}

	public MappingSelect(evt: any): void {
		evt.stopPropagation();
		evt.target.select();
	}

	public CipherInput(evt: any): void {
		this.cipher = evt.target.value;
		evt.target.value = this.cipher.split('').map(s => {
			if(s == '\n' || s == '\t') {
				return;
			}
			return s;
		}).join('');
		this.calcfreq(this.cipher);
		this.initMap();
		this.rebuild();
	}

	public MapUpdate(evt: any): void {
		let c = evt.target.name;
		let m = this.mapping.get(c);
		let mToSet = ("" + evt.target.value)[0];
		if(!/[a-z]/.test(mToSet)) {
			this.mappingsField[this.alphabets.indexOf(c)].value = m;
			this.mappingsField[this.alphabets.indexOf(c)].select();
		}
		if(mToSet != m) {
			let noConflict = true;
			this.mapping.forEach((otherm, otherc) => {
				if(otherc == c) return;
				if(mToSet == otherm) {
					if(this.mappingConfirmed.get(otherm)) {
						noConflict = false;
					} else {
						this.mapping.set(otherc, m);
						this.mappingsField[this.alphabets.indexOf(otherc)].value = m;
					}
				}
			});
			if(noConflict) {
				this.mapping.set(c, mToSet);
				this.mappingsField[this.alphabets.indexOf(c)].value = mToSet;
				this.mappingsField[(this.alphabets.indexOf(c) + 1) % 26].select();

				console.log(`${c} is mapped to ${mToSet}`);
				this.rebuild();
			} else {
				this.mapping.set(c, m);
				this.mappingsField[this.alphabets.indexOf(c)].value = m;
				this.mappingsField[this.alphabets.indexOf(c)].select();
			}
		}
	}

	public MarkConfirm(c: string): void {
		let m = this.mapping.get(c);
		this.mappingConfirmed.set(m, !this.mappingConfirmed.get(m));
		this.mappingsField[this.alphabets.indexOf(c)].disabled = this.mappingConfirmed.get(m);
		this.rebuild();
	}
}
