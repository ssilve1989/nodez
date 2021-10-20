import { Injectable } from "@nestjs/common";
import { add } from 'nodez/trumid/ats/common/math';

@Injectable()
class AppService {
  public add(x: number, y: number): number {
    return add(x, y);
  }
}

export { AppService };
