import {repeatWord} from './func';


describe('The word and the number of its repetitions', () => {
	it('The function should return the received word and the number of times to repeat it', () => {
	expect(repeatWord('мир', 1)).toBe('мир1, ');
	expect(repeatWord('весна', 2)).toBe('весна1, весна2, ');
	expect(repeatWord('самолёт', 3)).toBe('самолёт1, самолёт2, самолёт3, ');
	});
}); 
