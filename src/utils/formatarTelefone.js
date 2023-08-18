function formatPhoneNumber(phoneNumber) {
    return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`;
}


module.exports = formatPhoneNumber;