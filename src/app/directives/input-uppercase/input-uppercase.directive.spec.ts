import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { InputUppercaseDirective } from './input-uppercase.directive';
import { FormsModule } from '@angular/forms';

@Component({
  template: '<input appInputUppercase [(ngModel)]="model" />',
})
class TestComponent {
  model = '';
}

describe('InputUppercaseDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, InputUppercaseDirective],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new InputUppercaseDirective();
    expect(directive).toBeTruthy();
  });

  it('should convert input to uppercase', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = 'hello';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputElement.value).toBe('HELLO');
  });
});
