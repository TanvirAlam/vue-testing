import { mount } from "@vue/test-utils";
import expect from "expect";
import Question from "../src/components/Question.vue";

describe("Question", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Question, {
      propsData: {
        dataQuestion: {
          title: "The title",
          body: "The body"
        }
      }
    });
  });

  it("presents the title and the body", () => {
    // expect(wrapper.html()).toContain("The title");
    // expect(wrapper.html()).toContain("The body");
    see("The title");
    see("The body");
  });

  it("can be edited", () => {
    expect(wrapper.contains("input[name=title]")).toBe(false);

    click("#edit");

    expect(wrapper.find("input[name=title]").element.value).toBe("The title");
    expect(wrapper.find("textarea[name=body]").element.value).toBe("The body");
  });

  it("hides the edit button during edit mode", () => {
    expect(wrapper.contains("#edit")).toBe(true);

    click("#edit");

    expect(wrapper.contains("#edit")).toBe(false);
  });

  it("updates the question after being edited", () => {
    // wrapper.find("#edit").trigger("click");
    click("#edit");

    type("input[name=title]", "Changed title");
    type("textarea[name=body]", "Changed body");

    // wrapper.find("input[name=title]").element.value = "Changed title";
    // wrapper.find("input[name=title]").trigger("input");
    // wrapper.find("textarea[name=body]").element.value = "Changed body";
    // wrapper.find("textarea[name=body]").trigger("input");

    click("#update");
    see("Changed title");
    see("Changed body");
  });

  it("it can cancel out edit mode", () => {
    click("#edit");

    type("input[name=title]", "Changed title");

    click("#cancel");

    see("The title");
  });

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrap.html()).toContain(text);
  };

  let type = (selector, text) => {
    let node = wrapper.find(selector);

    node.element.value = text;

    node.trigger("input");
  };

  let click = selector => {
    wrapper.find(selector).trigger("click");
  };
});
