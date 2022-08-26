/**
 * 验证邮箱
 */
export function verificationEmail(data) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(data);
}

/**
 * 验证密码 6至15位的字母+数字
 */
export function verificationPwd(data) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,15}$/;
    return reg.test(data);
}
