//This could easily be a different folder such as '../data/users.js'
import { users } from "../fixtures/users.js";

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("http://tylerlemke.me/cypress/json-export-example/");
  });
  it("Can enter admin credentials", () => {
    cy.get('input[data-test="username"]').type(users.admin.username);
    cy.get('input[data-test="password"]').type(users.admin.password);
  });
  it("Can enter normal user credentials", () => {
    cy.get('input[data-test="username"]').type(users.noPrivilege.username);
    cy.get('input[data-test="password"]').type(users.noPrivilege.password);
  });
});
