import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AspectResult {
  aspect: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
}

@Component({
  selector: 'app-analyze',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './analyze.html',
  styleUrl: './analyze.css'
})
export class Analyze {
  reviewText = '';
  selectedCategory = 'smartphone';

  isAnalyzing = signal(false);
  hasResult = signal(false);

  overallSentiment = signal<'positive' | 'negative' | 'neutral' | 'mixed'>('mixed');

  results = signal<AspectResult[]>([]);

  sampleReviews = [
    'The camera is excellent but the battery drains very quickly.',
    'The display is bright and smooth, but the phone feels overpriced.',
    'Battery life is good, charging is fast, and the camera quality is impressive.'
  ];

  useSample(review: string): void {
    this.reviewText = review;
  }

  analyzeReview(): void {
    const review = this.reviewText.trim();

    if (!review) {
      return;
    }

    this.isAnalyzing.set(true);
    this.hasResult.set(false);

    setTimeout(() => {
      this.results.set([
        {
          aspect: 'Camera',
          sentiment: 'positive',
          confidence: 96
        },
        {
          aspect: 'Battery',
          sentiment: 'negative',
          confidence: 93
        },
        {
          aspect: 'Display',
          sentiment: 'neutral',
          confidence: 82
        }
      ]);

      this.overallSentiment.set('mixed');
      this.isAnalyzing.set(false);
      this.hasResult.set(true);
    }, 1200);
  }
}