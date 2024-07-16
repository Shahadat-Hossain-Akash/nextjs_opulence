export const checkBalanceType = (text: string) => {
    switch (text.toLowerCase()) {
        case 'income':
            return 'text-[#E5FE72]'
        case 'expense':
            return 'text-[#FF5251]'
        default:
            return
    }
}
