const test = require("node:test");
const assert = require("node:assert");
const { login } = require("../src/login");

test("login exitoso con credenciales correctas", () => {
  const result = login("admin", "1234");
  assert.ok(result.ok);
  assert.match(result.message, /Bienvenido, admin/);
});

test("login fallido con contrasena incorrecta", () => {
  const result = login("admin", "wrong");
  assert.strictEqual(result.ok, false);
  assert.match(result.message, /Credenciales incorrectas/);
});

test("login fallido sin datos", () => {
  const result = login("", "");
  assert.strictEqual(result.ok, false);
  assert.match(result.message, /requeridos/);
});
