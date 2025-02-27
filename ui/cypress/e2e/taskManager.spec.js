describe("Task Manager App", () => {
    it("should allow adding and marking a task as done", () => {
      cy.visit("http://localhost:3000");
      
      cy.get("input[placeholder='Title']").type("Test Task");
      cy.get("textarea[placeholder='Description']").type("Task Description");
      cy.get("button").contains("Add").click();
      
      cy.contains("Test Task");
      cy.contains("Done").click();
    });
  });
  