import { INestApplication } from '@nestjs/common';
import * as fs from 'fs';
import { SpelunkerModule } from 'nestjs-spelunker';
import { CustomLoggerService } from '../core/logger/logger.service';
import { getAppMode } from './getAppMode';

const logger = new CustomLoggerService();

/**
 * Generate a module dependency graph for debugging
 * @param app
 */
export async function generateDependencyGraph(app: INestApplication) {
  logger.setContext(generateDependencyGraph.name);
  logger.log(`Application Mode: ${getAppMode().toUpperCase()} - Generating dependency graph`);

  const tree = SpelunkerModule.explore(app);
  const root = SpelunkerModule.graph(tree);
  const edges = SpelunkerModule.findGraphEdges(root);

  const mermaidEdges = edges
    .map(({ from, to }) => `${from.module.name}-->${to.module.name}`)
    .filter((edge) => !edge.includes('FilteredModule') && !edge.includes('OtherExample'))
    .sort();

  fs.writeFileSync('deps.mermaid', `graph LR\n${mermaidEdges.join('\n')}`);
}
