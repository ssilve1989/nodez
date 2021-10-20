import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
class AppController {
  constructor(private readonly service: AppService) {}

  @Post()
  add(@Body() { x, y }) {
    return this.service.add(x, y);
  }
}

export { AppController };
