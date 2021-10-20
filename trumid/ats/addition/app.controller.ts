import { Body, Controller, Post } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { AppService } from "./app.service";

@Controller()
class AppController {
  constructor(private readonly service: AppService) {}

  @Post()
  add(@Body() { x, y }) {
    return this.service.add(x, y);
  }

  @GrpcMethod("AdditionService", "Add")
  addRpc({ x, y }) {
    return { result: this.service.add(x, y) }
  }
}

export { AppController };
