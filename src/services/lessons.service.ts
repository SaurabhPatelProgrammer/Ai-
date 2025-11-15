type Lesson = {
  id: string;
  title: string;
  level: string;
};

const demoLessons: Lesson[] = [
  { id: "1", title: "Greetings & Introductions", level: "A1" },
  { id: "2", title: "Ordering at a Café", level: "A2" }
];

export default class LessonsService {
  static getAll() {
    return demoLessons;
  }

  static getById(id: string) {
    return demoLessons.find(l => l.id === id) || null;
  }
}
