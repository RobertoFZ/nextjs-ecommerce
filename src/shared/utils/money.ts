import Dinero from 'dinero.js'

export const formatMoney = (amount: number): string => {
	if (typeof amount !== 'number') {
		throw new Error('Invalid amount to format DineroJS')
	}
	const roundedAmount = Math.trunc(amount * 100)
	return Dinero({ amount: roundedAmount }).toFormat('$0,0.00')
}
