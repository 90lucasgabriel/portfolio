import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpRequest }  from '@angular/common/http/src/request';

@Injectable()
export class LoaderService {
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Stores all currently active requests
   */
  private requests: HttpRequest<any>[] = [];

  /**
   * Adds request to the storage and notifies observers
   */
  onStarted(req: HttpRequest<any>): void {
    this.requests.push(req);
    this.notify();
    console.log('started');
  }

  /**
   * Removes request from the storage and notifies observers
   */
  onFinished(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    this.requests.splice(index - 1, 1);
    this.notify();
    console.log('onFinished');
  }

  /**
   * Notifies observers about whether there are any requests on fly
   */
  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
    console.log('notify');
  }
}