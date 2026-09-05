const USERS = { admin: "1234", angel: "esan" };

/**
 * Valida credenciales contra un registro en memoria.
 * @param {string} user
 * @param {string} password
 * @returns {{ ok: boolean, message: string }}
 */
function login(user, password) {
  if (!user || !password) {
    return { ok: false, message: "Usuario y contraseña son requeridos." };
  }
  if (USERS[user] === password) {
    return { ok: true, message: `Bienvenido, ${user}.` };
  }
  return { ok: false, message: "Credenciales incorrectas." };
}

module.exports = { login };
