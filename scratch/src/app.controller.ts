import { Controller, Get } from "@nestjs/common";

@Controller("/api/v1")
export class AppController {
  @Get("/hello")
  getHello() {
    return "Hello nest js)))))))))))";
  }

  @Get("/bye")
  getBye() {
    return "Bye nest js ((((((((((((";
  }
}
