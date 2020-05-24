#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdktestStack } from '../lib/cdktest-stack';

const app = new cdk.App();
new CdktestStack(app, 'CdktestStack');
