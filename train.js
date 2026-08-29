// A-TASK:

// Harf sifatida kiritilgan birinchi parametr,
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

let count = 0
function countLetter(letter, word) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			count++
		}
	}
	return count
}

console.log(countLetter('e', 'engineer'))
// console.log(countLetter('a', 'assalam'))

// console.log('Jack Ma maslahatlari')
// const list = [
// 	'yahshi talaba boling', // 0-20
// 	'togri boshliq tanlang va koproq hato qiling', // 20-30
// 	'uzingizga ishlashingizni boshlang', // 30-40
// 	'siz kuchli bolgan narsalarni qiling', // 40-50
// 	'yoshlarga investitsiya qiling', // 50-60
// 	'endi dam oling, foydasi yoq endi', // 60
// ]

// CALLBACK function

// function maslahatBering(a, callback) {
// 	if (typeof a !== 'number') callback('insert a number', null)
// 	else if (a <= 20) callback(null, list[0])
// 	else if (a > 20 && a <= 30) callback(null, list[1])
// 	else if (a > 30 && a <= 40) callback(null, list[2])
// 	else if (a > 40 && a <= 50) callback(null, list[3])
// 	else if (a > 50 && a <= 60) callback(null, list[4])
// 	else {
// 		setTimeout(() => {
// 			callback(null, list[5])
// 		}, 5000)
// 	}
// }

// maslahatBering(21, (err, data) => {
// 	if (err) console.log('ERROR:', err)
// 	else console.log('javob:', data)
// })

//ASYNC and PROMISE functions

// async function maslahatBering(a) {
// 	if (typeof a !== 'number') throw new Error('insert a number')
// 	else if (a <= 20) return list[0]
// 	else if (a > 20 && a <= 30) return list[1]
// 	else if (a > 30 && a <= 40) return list[2]
// 	else if (a > 40 && a <= 50) return list[3]
// 	else if (a > 50 && a <= 60) return list[4]
// 	else {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				resolve(list[5])
// 			}, 5000)
// 		})
// 	}
// }

// call via then/catch
// console.log('passed here 0')
// maslahatBering(21)
// 	.then(data => {
// 		console.log('javob:', data)
// 	})
// 	.catch(err => {
// 		console.log('ERROR:', err)
// 	})
// console.log('passed here 1')

// call via async/await
// async function run() {
// 	let javob = await maslahatBering(21)
// 	console.log(javob)
// 	javob = await maslahatBering(67)
// 	console.log(javob)
// 	javob = await maslahatBering(18)
// 	console.log(javob)
// }
// run()
// console.log('1')

// function maslahatBering(a, callback) {
// 	if (typeof a !== 'number') callback('insert a number', null)
// 	else if (a <= 20) callback(null, list[0])
// 	else if (a > 20 && a <= 30) callback(null, list[1])
// 	else if (a > 30 && a <= 40) callback(null, list[2])
// 	else if (a > 40 && a <= 50) callback(null, list[3])
// 	else if (a > 50 && a <= 60) callback(null, list[4])
// 	else {
// 		setInterval(function () {
// 			callback(null, list[5])
// 		}, 1000)
// 	}
// }

// console.log('passed here 0')
// maslahatBering(77, (err, data) => {
// 	if (err) console.log('ERROR:', err)
// 	else {
// 		console.log(data)
// 	}
// })
// console.log('passed here 1')
