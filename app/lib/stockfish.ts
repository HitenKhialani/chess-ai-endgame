import { Stockfish } from 'stockfish';

class StockfishWrapper {
  private engine: any;
  private isReady: boolean = false;
  private depth: number = 15; // Adjust depth based on difficulty level

  constructor() {
    this.engine = Stockfish();
    this.init();
  }

  private init() {
    this.engine.onmessage = (event: any) => {
      const message = event as string;
      if (message === 'uciok') {
        this.engine.postMessage('isready');
      } else if (message === 'readyok') {
        this.isReady = true;
      }
    };
    this.engine.postMessage('uci');
  }

  public async getBestMove(fen: string): Promise<{ bestMove: string; score: number }> {
    return new Promise((resolve) => {
      let bestMove = '';
      let score = 0;

      this.engine.onmessage = (event: any) => {
        const message = event as string;
        
        if (message.startsWith('bestmove')) {
          const move = message.split(' ')[1];
          resolve({ bestMove: move, score });
        } else if (message.includes('score cp')) {
          const scoreMatch = message.match(/score cp (-?\d+)/);
          if (scoreMatch) {
            score = parseInt(scoreMatch[1]) / 100; // Convert centipawns to pawns
          }
        }
      };

      this.engine.postMessage('position fen ' + fen);
      this.engine.postMessage('go depth ' + this.depth);
    });
  }

  public setDifficulty(level: 'beginner' | 'intermediate' | 'advanced') {
    switch (level) {
      case 'beginner':
        this.depth = 5;
        break;
      case 'intermediate':
        this.depth = 10;
        break;
      case 'advanced':
        this.depth = 15;
        break;
    }
  }

  public async getPositionEvaluation(fen: string): Promise<number> {
    return new Promise((resolve) => {
      this.engine.onmessage = (event: any) => {
        const message = event as string;
        if (message.includes('score cp')) {
          const scoreMatch = message.match(/score cp (-?\d+)/);
          if (scoreMatch) {
            resolve(parseInt(scoreMatch[1]) / 100);
          }
        }
      };

      this.engine.postMessage('position fen ' + fen);
      this.engine.postMessage('go depth 15');
    });
  }

  public quit() {
    this.engine.postMessage('quit');
  }
}

// Export a singleton instance
const stockfish = new StockfishWrapper();
export default stockfish; 